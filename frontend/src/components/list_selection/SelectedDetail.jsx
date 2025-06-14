import {CloseButton, Group, NavLink, Paper, Text} from '@mantine/core';
import {useNavigate} from "react-router-dom";
import addCross from "../../assets/add_plus_square.svg";
import {useFetch} from "../../hooks/useFetch.jsx";

export default function SelectedDetail({fetch, id, detailsLink, name, deselect}) {
    const navigate = useNavigate();
    const {data: detail} = useFetch(fetch, id);
    return (
        <Paper
            withBorder
            shadow="xs"
            radius="md"
            style={{
                height: '6rem',
                width: '18rem',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {detail &&
                <CloseButton
                    size="sm"
                    style={{
                        position: 'absolute',
                        top: 5,
                        right: 5,
                        zIndex: 10,
                    }}
                    variant="subtle"
                    color="gray"
                    onClick={deselect}
                />
            }

            <Group
                p="xs"
                style={{
                    height: '100%',
                    width: '100%',
                    flexWrap: 'nowrap',
                    overflow: 'hidden',
                }}
            >
                <NavLink
                    style={{
                        backgroundColor: 'white',
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    label={
                        <Text
                            size="md"
                            fw={500}
                            lineClamp={1}
                            style={{
                                paddingLeft: '1em',
                                fontFamily: 'WDXL Lubrifont TC, sans-serif',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {detail ? detail.model : name}
                        </Text>
                    }
                    leftSection={
                        <img
                            src={detail ? detail.photoLink : addCross}
                            alt=""
                            style={{ flexShrink: 0, height: '3.5rem', width: '3.5rem' }}
                        />
                    }
                    onClick={() =>
                        navigate(detail ? `${detailsLink}/${detail.id}` : detailsLink)
                    }
                />
            </Group>
        </Paper>
    );
}