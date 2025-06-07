import { Stack } from '@mantine/core';
import SelectedDetail from "./SelectedDetail.jsx";
import {getAntennaById} from "../../services/AntennaService.jsx";
import {getBatteryById} from "../../services/BatteryService.jsx";
import {getCameraById} from "../../services/CameraService.jsx";
import {getFrameById} from "../../services/FrameService.jsx";
import {getMotorById} from "../../services/MotorService.jsx";
import {getPropellerById} from "../../services/PropellerService.jsx";
import {getRXById} from "../../services/RXService.jsx";
import {getStackById} from "../../services/StackService.jsx";
import {getVTXById} from "../../services/VTXService.jsx";

export default function DetailSelectionPanel({getSelectedDetailId, selectDetailId}) {
    return (
        <Stack style={{
            backgroundColor: 'rgba(109, 128, 125, 0.5)',
            padding: '1rem'}}
        >
            <SelectedDetail
                id={getSelectedDetailId("antenna_rx")}
                fetch={getAntennaById}
                detailsLink={"/drone_components/antenna_rx"}
                detailLinkPrefix={"/drone_components/antenna"}
                name={"АНТЕНА RX"}
                deselect={() => selectDetailId("antenna_rx", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("antenna_vtx")}
                fetch={getAntennaById}
                detailsLink={"/drone_components/antenna_vtx"}
                detailLinkPrefix={"/drone_components/antenna"}
                name={"АНТЕНА VTX"}
                deselect={() => selectDetailId("antenna_vtx", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("battery")}
                fetch={getBatteryById}
                detailsLink={"/drone_components/battery"}
                detailLinkPrefix={"/drone_components/battery"}
                name={"БАТАРЕЯ"}
                deselect={() => selectDetailId("battery", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("camera")}
                fetch={getCameraById}
                detailsLink={"/drone_components/camera"}
                detailLinkPrefix={"/drone_components/camera"}
                name={"КАМЕРА"}
                deselect={() => selectDetailId("camera", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("frame")}
                fetch={getFrameById}
                detailsLink={"/drone_components/frame"}
                detailLinkPrefix={"/drone_components/frame"}
                name={"РАМА"}
                deselect={() => selectDetailId("frame", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("motor")}
                fetch={getMotorById}
                detailsLink={"/drone_components/motor"}
                detailLinkPrefix={"/drone_components/motor"}
                name={"МОТОРИ"}
                deselect={() => selectDetailId("motor", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("propeller")}
                fetch={getPropellerById}
                detailsLink={"/drone_components/propeller"}
                detailLinkPrefix={"/drone_components/propeller"}
                name={"ПРОПЕЛЕРИ"}
                deselect={() => selectDetailId("propeller", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("rx")}
                fetch={getRXById}
                detailsLink={"/drone_components/rx"}
                detailLinkPrefix={"/drone_components/rx"}
                name={"RX"}
                deselect={() => selectDetailId("rx", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("stack")}
                fetch={getStackById}
                detailsLink={"/drone_components/stack"}
                detailLinkPrefix={"/drone_components/stack"}
                name={"СТЕК"}
                deselect={() => selectDetailId("stack", null)}
            />
            <SelectedDetail
                id={getSelectedDetailId("vtx")}
                fetch={getVTXById}
                detailsLink={"/drone_components/vtx"}
                detailLinkPrefix={"/drone_components/vtx"}
                name={"VTX"}
                deselect={() => selectDetailId("vtx", null)}
            />
        </Stack>
    );
}