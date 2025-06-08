import DetailSelectionPanel from "../components/list_selection/DetailSelectionPanel.jsx";
import open_arrow from "../assets/left_arrow.svg";
import close_arrow from "../assets/right_arrow.svg";
import {Button, Group, Paper} from "@mantine/core";
import {useState} from "react";
import {useListSelect} from "../hooks/useListSelect.jsx";
import DetailSelectionFooter from "../components/list_selection/DetailSelectionFooter.jsx";
import DroneShowcase from "../components/model/DroneShowcase.jsx";

export default function SchemaPage() {
    const { isSelecting, startSelecting, finishSelecting,
        getSelectedDetailId, selectDetailId} = useListSelect();
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            style={{
                minHeight: '100vh',
                overflowY: 'auto',
                backgroundColor: 'rgba(109, 128, 125, 0.5)',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div style={{ flex: 1 }}>
                <DroneShowcase />
            </div>

            <Group justify="flex-end" gap="0" style={{ position: 'relative', zIndex: 1 }}>
                {isSelecting && (
                    <>
                        <Button
                            color="gray"
                            radius="lg"
                            onClick={toggle}
                            p="xs"
                            style={{
                                position: 'fixed',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                right: collapsed ? '2vw' : '22vw',
                                minRight: collapsed ? '1vw' : '250px',
                                zIndex: 1000,
                                transition: '0.2s position',
                            }}
                        >
                            <img
                                src={collapsed ? open_arrow : close_arrow}
                                alt={collapsed ? 'Open tab' : 'Close tab'}
                                style={{ height: '1.5em' }}
                            />
                        </Button>

                        <Paper
                            shadow="md"
                            radius="0"
                            mb="70px"
                            style={{
                                position: 'relative',
                                height: '100vh',
                                width: collapsed ? '1vw' : '21vw',
                                minWidth: collapsed ? '1vw' : '250px',
                                transition: 'width 0.2s',
                                overflowY: collapsed ? 'hidden' : 'auto',
                                backgroundColor: 'rgba(109, 128, 125, 0.5)',
                            }}
                        >
                            {!collapsed && (
                                <DetailSelectionPanel
                                    getSelectedDetailId={getSelectedDetailId}
                                    selectDetailId={selectDetailId}
                                />
                            )}
                        </Paper>
                    </>
                )}

                <DetailSelectionFooter
                    startSelecting={startSelecting}
                    finishSelecting={finishSelecting}
                    isSelecting={isSelecting}
                    getSelectedDetailId={getSelectedDetailId}
                />
            </Group>
        </div>
    );
}