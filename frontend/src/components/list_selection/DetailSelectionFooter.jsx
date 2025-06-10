import {Button, Group, Paper, ScrollArea, Text} from "@mantine/core";
import DroneSavingWindow from "./DroneSavingWindow.jsx";
import {useDisclosure} from "@mantine/hooks";
import { useJWT } from "../../hooks/useJWT.jsx";
import {droneValidationService} from "../../services/DroneValidationService.jsx";
import {useNavigate} from "react-router-dom";
import {getAntennaById} from "../../services/AntennaService.jsx";
import {useFetch} from "../../hooks/useFetch.jsx";
import {getBatteryById} from "../../services/BatteryService.jsx";
import {getCameraById} from "../../services/CameraService.jsx";
import {getFrameById} from "../../services/FrameService.jsx";
import {getMotorById} from "../../services/MotorService.jsx";
import {getPropellerById} from "../../services/PropellerService.jsx";
import {getRXById} from "../../services/RXService.jsx";
import {getStackById} from "../../services/StackService.jsx";
import {getVTXById} from "../../services/VTXService.jsx";
import {notifications} from "@mantine/notifications";

export default function DetailSelectionFooter({ isSelecting, startSelecting, finishSelecting, getSelectedDetailId}) {
    
    const { isLoggedIn } = useJWT();
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const idsList = {
        rxAntennaId: getSelectedDetailId("antenna_rx"),
        vtxAntennaId: getSelectedDetailId("antenna_vtx"),
        batteryId: getSelectedDetailId("battery"),
        cameraId: getSelectedDetailId("camera"),
        frameId: getSelectedDetailId("frame"),
        motorId: getSelectedDetailId("motor"),
        propellerId: getSelectedDetailId("propeller"),
        rxId: getSelectedDetailId("rx"),
        stackId: getSelectedDetailId("stack"),
        vtxId: getSelectedDetailId("vtx"),
    }
    const detailsList = {
        rxAntenna: useFetch(getAntennaById, idsList.rxAntennaId).data,
        vtxAntenna: useFetch(getAntennaById, idsList.vtxAntennaId).data,
        battery: useFetch(getBatteryById, idsList.batteryId).data,
        camera: useFetch(getCameraById, idsList.cameraId).data,
        frame: useFetch(getFrameById, idsList.frameId).data,
        motor: useFetch(getMotorById, idsList.motorId).data,
        propeller: useFetch(getPropellerById, idsList.propellerId).data,
        rx: useFetch(getRXById, idsList.rxId).data,
        stack: useFetch(getStackById, idsList.stackId).data,
        vtx: useFetch(getVTXById, idsList.vtxId).data,
    }

    const droneValid = droneValidationService.isValid(detailsList);
    const issues = droneValidationService.getIssues(detailsList);

    const showIssues = () => {
        for(let issue of issues) {
            notifications.show({
                color: 'red',
                title: 'Проблема з дроном',
                message: issue,
            })
        }
    }

    let sizeInches;
    if(detailsList.frame)
        sizeInches = detailsList.frame.propellersInches;
    else if(detailsList.propeller)
        sizeInches = detailsList.propeller.sizeInches;
    else
        sizeInches = null;

    let mass = Object.values(detailsList).reduce(
        (acc, detail) => acc + (detail?.mass || 0), 0);

    let price = Object.values(detailsList).reduce(
        (acc, detail) => acc + (detail?.startingPrice || 0), 0);


    return (
        <Paper
            shadow="md"
            px="md"
            py={6}
            radius={0}
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100vw',
                height: '70px',
                backgroundColor: 'rgb(101, 101, 101)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Group justify="space-between" align="center" style={{ width: '100%' }} gap="sm" wrap="nowrap">
                <Button
                    w={240}
                    size="sm"
                    radius="md"
                    color={isSelecting ? 'red' : 'blue'}
                    onClick={isSelecting ? finishSelecting : startSelecting}
                >
                    {isSelecting ? 'Припинити збірку' : 'Зібрати дрон'}
                </Button>

                <Group gap="xs" wrap="nowrap">
                    <Text size="sm">Приблизна маса:</Text>
                    <Text size="sm" w={60} ta="center">
                        <b>{isSelecting ? mass.toFixed(1) + "г" : "-"}</b>
                    </Text>

                    <Text size="sm">Розмір:</Text>
                    <Text size="sm" w={40} ta="center">
                        <b>{isSelecting && sizeInches? sizeInches + '"' : "-"}</b>
                    </Text>

                    <Text size="sm">Мінімальна ціна:</Text>
                    <Text size="sm" w={80} ta="center">
                        <b>{isSelecting ? price.toFixed(2) + " грн" : "-"}</b>
                    </Text>
                </Group>

                <Button
                    w={140}
                    size="sm"
                    radius="md"
                    color="blue"
                    onClick={() => isLoggedIn ?
                        (droneValid ? open() : showIssues())
                        :
                        navigate('/log-in')}
                >
                    Зберегти дрон
                </Button>
            </Group>

            <DroneSavingWindow
                opened={opened}
                close={close}
                idsList={idsList}
                finishSelecting={finishSelecting}
            />
        </Paper>
    );
}