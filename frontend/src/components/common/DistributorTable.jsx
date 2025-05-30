import { Divider, Grid, Badge } from '@mantine/core';
import link from '../../assets/link.svg'
import '../../styles/DroneComponent.css'

function DistributorTable() {

    const elements = [
        {
            "distributorName": "Aliexpress",
            "distributorLink": "#",
            "instock": true,
            "price": "300$"
        },
        {
            "distributorName": "DarkUKMA",
            "distributorLink": "#",
            "instock": false,
            "price": "100$"
        }
    ];

    const getStockBadge = (inStock) => {
        return (
            <Badge
                size="lg"
                variant="gradient"
                gradient={inStock 
                    ? { from: 'teal', to: 'lime', deg: 90 }
                    : { from: 'gray', to: 'rgba(196, 190, 190, 1)', deg: 90 }
                }
            >
                {inStock ? "Є в наявності" : "Немає в наявності"}
            </Badge>
        );
    }

    const rows = elements.map((element) => (<>
        <div className='component-attribute'>
            <Grid w={"100%"}>
                <Grid.Col span={4}>
                    <span style={{"fontWeight": "700"}}>
                        {element.distributorName}
                    </span>
                </Grid.Col>
                <Grid.Col span={4}>
                    <span>
                        {getStockBadge(element.instock)}
                    </span>
                </Grid.Col>
                <Grid.Col span={4}>
                    <div style={{"textAlign": "center"}}>
                        {element.price}
                    </div>
                </Grid.Col>
            </Grid>
            <div style={{"dispaly" : "flex",
                         "justify-content" : "center"
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