import './style.css';
import CalendarAvailability from '../../../../components/CalendarAvailability';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../../../contexts/ProductContext';

const Calendar = () => {
    
    const { product } = useProductContext();

    return (
        <div className="availableDates">
            <h2>Datas disponíveis</h2>
            <div className="calendarSelection">
                <CalendarAvailability />
                <div className="selection">
                    <p>Adicione as datas da sua viagem para obter preços exatos</p>
                    <Link to={`/produto/${product.idProduct}/reserva`}><button>Iniciar reserva</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Calendar;