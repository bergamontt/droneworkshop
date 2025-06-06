import { Stack } from '@mantine/core';
import {getAntennaById} from "../../services/AntennaService.jsx";
import { listSelectService } from "../../services/ListSelectService.jsx";
import SelectedDetail from "./SelectedDetail.jsx";
import {getBatteryById} from "../../services/BatteryService.jsx";
import {getCameraById} from "../../services/CameraService.jsx";
import {getFrameById} from "../../services/FrameService.jsx";
import {getMotorById} from "../../services/MotorService.jsx";
import {getPropellerById} from "../../services/PropellerService.jsx";
import {getRXById} from "../../services/RXService.jsx";
import {getStackById} from "../../services/StackService.jsx";
import {getVTXById} from "../../services/VTXService.jsx";

export default function DetailSelectionPanel() {
    return (
        <Stack style={{
            backgroundColor: 'rgba(109, 128, 125, 0.5)',
            padding: '1rem'}}
        >
            <SelectedDetail
                fetch={getAntennaById}
                getDetailId={listSelectService.getRxAntennaId}
                detailsLink={"/drone_components/antenna_rx"}
                detailLinkPrefix={"/drone_components/antenna"}
                name={"АНТЕНА RX"}
            />
            <SelectedDetail
                fetch={getAntennaById}
                getDetailId={listSelectService.getVtxAntennaId}
                detailsLink={"/drone_components/antenna_vtx"}
                detailLinkPrefix={"/drone_components/antenna"}
                name={"АНТЕНА VTX"}
            />
            <SelectedDetail
                fetch={getBatteryById}
                getDetailId={listSelectService.getBatteryId}
                detailsLink={"/drone_components/battery"}
                detailLinkPrefix={"/drone_components/battery"}
                name={"БАТАРЕЯ"}
            />
            <SelectedDetail
                fetch={getCameraById}
                getDetailId={listSelectService.getCameraId}
                detailsLink={"/drone_components/camera"}
                detailLinkPrefix={"/drone_components/camera"}
                name={"КАМЕРА"}
            />
            <SelectedDetail
                fetch={getFrameById}
                getDetailId={listSelectService.getFrameId}
                detailsLink={"/drone_components/frame"}
                detailLinkPrefix={"/drone_components/frame"}
                name={"РАМА"}
            />
            <SelectedDetail
                fetch={getMotorById}
                getDetailId={listSelectService.getMotorId}
                detailsLink={"/drone_components/motor"}
                detailLinkPrefix={"/drone_components/motor"}
                name={"МОТОРИ"}
            />
            <SelectedDetail
                fetch={getPropellerById}
                getDetailId={listSelectService.getPropellerId}
                detailsLink={"/drone_components/propeller"}
                detailLinkPrefix={"/drone_components/propeller"}
                name={"ПРОПЕЛЕРИ"}
            />
            <SelectedDetail
                fetch={getRXById}
                getDetailId={listSelectService.getRxId}
                detailsLink={"/drone_components/rx"}
                detailLinkPrefix={"/drone_components/rx"}
                name={"RX"}
            />
            <SelectedDetail
                fetch={getStackById}
                getDetailId={listSelectService.getStackId}
                detailsLink={"/drone_components/stack"}
                detailLinkPrefix={"/drone_components/stack"}
                name={"СТЕК"}
            />
            <SelectedDetail
                fetch={getVTXById}
                getDetailId={listSelectService.getVtxId}
                detailsLink={"/drone_components/vtx"}
                detailLinkPrefix={"/drone_components/vtx"}
                name={"VTX"}
            />
        </Stack>
    );
}