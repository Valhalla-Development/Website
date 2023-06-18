import { Maintenance } from '../components/Maintenance/Maintenance';

const maintenance = true;

export default function HomePage() {
    return (
        maintenance ? <Maintenance /> : <></>
    );
}
