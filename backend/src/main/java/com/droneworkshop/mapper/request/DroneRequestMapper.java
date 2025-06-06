package com.droneworkshop.mapper.request;

import com.droneworkshop.dto.request.DroneRequestDto;
import com.droneworkshop.model.authentification.User;
import com.droneworkshop.model.component.*;
import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.repository.component.*;
import com.droneworkshop.repository.publication.UserRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class DroneRequestMapper {

    private final UserRepository userRepository;
    private final FrameRepository frameRepository;
    private final PropellerRepository propellerRepository;
    private final CameraRepository cameraRepository;
    private final VTXRepository vtxRepository;
    private final RXRepository rxRepository;
    private final AntennaRepository antennaRepository;
    private final BatteryRepository batteryRepository;
    private final MotorRepository motorRepository;
    private final StackRepository stackRepository;

    public DroneRequestMapper(
            UserRepository userRepository,
            FrameRepository frameRepository,
            PropellerRepository propellerRepository,
            CameraRepository cameraRepository,
            VTXRepository vtxRepository,
            RXRepository rxRepository,
            AntennaRepository antennaRepository,
            BatteryRepository batteryRepository,
            MotorRepository motorRepository,
            StackRepository stackRepository
    ) {
        this.userRepository = userRepository;
        this.frameRepository = frameRepository;
        this.propellerRepository = propellerRepository;
        this.cameraRepository = cameraRepository;
        this.vtxRepository = vtxRepository;
        this.rxRepository = rxRepository;
        this.antennaRepository = antennaRepository;
        this.batteryRepository = batteryRepository;
        this.motorRepository = motorRepository;
        this.stackRepository = stackRepository;
    }

    public void mapRequestToEntity(DroneRequestDto request, Drone drone) {
        drone.setDroneName(request.getDroneName());
        drone.setPhoto(null);

        MultipartFile photo = request.getPhoto();
        if (photo != null && !photo.isEmpty()) {
            try {
                drone.setPhoto(photo.getBytes());
            } catch (Exception e) {
                throw new RuntimeException("Failed to process photo");
            }
        }

        User user = userRepository.findById(request.getUserId()).orElse(null);
        drone.setUser(user);

        Frame frame = frameRepository.findById(request.getFrameId()).orElse(null);
        drone.setFrame(frame);

        Propeller propeller = propellerRepository.findById(request.getPropellerId()).orElse(null);
        drone.setPropeller(propeller);

        Camera camera = cameraRepository.findById(request.getCameraId()).orElse(null);
        drone.setCamera(camera);

        VTX vtx = vtxRepository.findById(request.getVtxId()).orElse(null);
        drone.setVtx(vtx);

        RX rx = rxRepository.findById(request.getRxId()).orElse(null);
        drone.setRx(rx);

        Antenna vtxAntenna = antennaRepository.findById(request.getVtxAntennaId()).orElse(null);
        drone.setVtxAntenna(vtxAntenna);

        Antenna rxAntenna = antennaRepository.findById(request.getRxAntennaId()).orElse(null);
        drone.setRxAntenna(rxAntenna);

        Battery battery = batteryRepository.findById(request.getBatteryId()).orElse(null);
        drone.setBattery(battery);

        Motor motor = motorRepository.findById(request.getMotorId()).orElse(null);
        drone.setMotor(motor);

        Stack stack = stackRepository.findById(request.getStackId()).orElse(null);
        drone.setStack(stack);
    }

}