import { Divider, Grid, Badge } from '@mantine/core';
import link from '../../assets/link.svg'
import '../../styles/DroneComponent.css'


function DistributorTable({distributors}) {

    if (!distributors) return <></>;

    const getStockBadge = (available) => {
        return (
            <Badge
                size="lg"
                variant="gradient"
                gradient={available 
                    ? { from: 'teal', to: 'lime', deg: 90 }
                    : { from: 'gray', to: 'rgba(196, 190, 190, 1)', deg: 90 }
                }
            >
                {available ? "Є в наявності" : "Немає в наявності"}
            </Badge>
        );
    }

    const rows = distributors.map((element) => (<>
        <div className='component-attribute'>
            <Grid w={"100%"}>
                <Grid.Col span={4}>
                    <span style={{"fontWeight": "700"}}>
                        {element.distributorName}
                    </span>
                </Grid.Col>
                <Grid.Col span={4}>
                    <span>
                        {getStockBadge(element.available)}
                    </span>
                </Grid.Col>
                <Grid.Col span={4}>
                    <div style={{"textAlign": "center"}}>
                        {element.price}грн
                    </div>
                </Grid.Col>
            </Grid>
            <div style={{"dispaly" : "flex",
                         "justifyContent" : "center"
                        }}>
                <img 
                    src={link}
                    href={element.distributorLink}
                    style={{"height" : "1.2em"}}
                />
            </div>
        </div>
        <Divider size="sm"/>
    </>));

  return (
        <div className='tabs-panel-wrapper'>{rows}</div>
  );
}

export default DistributorTable