
export const getComponentName = (name) => {
    switch(name) {
        case "antenna_rx": return "RX Антени";
        case "antenna_vtx": return "VTX Антени";
        case "battery": return "Батки";
        case "camera": return "Камери";
        case "frame": return "Рами";
        case "motor": return "Мотори";
        case "propeller": return "Пропелери";
        case "rx": return "RX";
        case "stack": return "Стеки";
        case "vtx": return "VTX";
    }
}