package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Distributor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DistributorRepository extends JpaRepository<Distributor, Integer> {
    List<Distributor> findByAntennaAntennaId(int antennaId);
    List<Distributor> findByBatteryBatteryId(int batteryId);
    List<Distributor> findByCameraCameraId(int cameraId);
    List<Distributor> findByFrameFrameId(int frameId);
    List<Distributor> findByMotorMotorId(int motorId);
    List<Distributor> findByPropellerPropellerId(int propellerId);
    List<Distributor> findByRxRxId(int rxRxId);
    List<Distributor> findByStackStackId(int stackId);
    List<Distributor> findByVtxVtxId(int vtxVtxId);
}