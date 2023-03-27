import axios from "axios";
import { IAppointment } from "../types/IAppointment";
import { Service } from "./AbstractService";

export class AppointmentService extends Service {
    static async getAll() {
        try {
            const response = await axios.get<IAppointment[]>(`${this.base}/appointments`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getOne(id: number) {
        try {
            const response = await axios.get<IAppointment>(`${this.base}/appointments/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async create(doctor: IAppointment) {
        try {
            const response = await axios.post<IAppointment>(`${this.base}/appointments`, doctor);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async udpate(doctor: IAppointment) {
        try {
            const response = await axios.put<Number>(`${this.base}/appointments/${doctor.id}`, doctor);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(id: number) {
        try {
            const response = await axios.delete<Number>(`${this.base}/appointments/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}