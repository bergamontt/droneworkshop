import {Button, Group, Paper, Text} from "@mantine/core";
import DroneSavingWindow from "./DroneSavingWindow.jsx";
import {useDisclosure} from "@mantine/hooks";
import {droneValidationService} from "../../services/DroneValidationService.jsx";

export default function DetailSelectionFooter({ isSelecting, startSelecting, finishSelecting, getSelectedDetailId}) {
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
    const droneValid = droneValidationService.isValid(idsList);

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
                backgroundColor: 'rgba(109, 128, 125, 1)',
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
                    <Text size="sm">Маса:</Text>
                    <Text size="sm" w={60} ta="center">
                        <b>{isSelecting ? "250 г" : "-"}</b>
                    </Text>

                    <Text size="sm">Розмір:</Text>
                    <Text size="sm" w={40} ta="center">
                        <b>{isSelecting ? '5"' : "-"}</b>
                    </Text>

                    <Text size="sm">Ціна:</Text>
                    <Text size="sm" w={80} ta="center">
                        <b>{isSelecting ? "7687 грн" : "-"}</b>
                    </Text>
                </Group>

                <Button
                    w={140}
                    size="sm"
                    radius="md"
                    color="blue"
                    onClick={open}
                    disabled={!droneValid}
                >
                    Зберегти дрон
                </Button>
            </Group>

            <DroneSavingWindow opened={opened} close={close} idsList={idsList} />
        </Paper>
    );
}