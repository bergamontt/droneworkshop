import DetailSelectionPanel from "../components/list_selection/DetailSelectionPanel.jsx";
import {useListSelect} from "../hooks/useListSelect.jsx";
import DetailSelectionFooter from "../components/list_selection/DetailSelectionFooter.jsx";
import DroneShowcase from "../components/model/DroneShowcase.jsx";
import '../styles/SchemaCreator.css'

export default function SchemaPage() {
    
    const { isSelecting, startSelecting, finishSelecting,
        getSelectedDetailId, selectDetailId} = useListSelect();

    return (
        
        <div className="schema-creator-page-container">
            
            <div className="schema-creator-main-container" >
                <div className="schema-creator-drone-wrapper">
                    <DroneShowcase
                        getSelectedDetailId={getSelectedDetailId}
                    />
                </div>
                <div className="schema-creator-sidebar-container">
                    <DetailSelectionPanel
                        getSelectedDetailId={getSelectedDetailId}
                        selectDetailId={selectDetailId}
                    />
                </div>
            </div>
            
              <DetailSelectionFooter
                startSelecting={startSelecting}
                finishSelecting={finishSelecting}
                isSelecting={isSelecting}
                getSelectedDetailId={getSelectedDetailId}
            />  

        </div>
    );
}