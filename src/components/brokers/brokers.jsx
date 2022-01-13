import { useContext } from 'react';
import Button from '../button/button';
import Form from '../form/form';
import { ModalContext } from '../services/contexts/modalcontext/modal.context';
import './brokers.scss';

export default function Brokers() {

    window.scrollTo(0, 0)

    const { contextModal, setContextModal } = useContext(ModalContext);

    return (
        <div className="brokers content">
            <div className="bg"></div>
            <div className="brokers_header">
                БРОКЕРЫ
            </div>
            <table>
                <tr>
                    <td>
                        Брокер
                    </td>
                    <td>
                        Мин. депозит
                    </td>
                    <td>
                        Преимущество
                    </td>
                    <td>
                        Активных клиентов
                    </td>
                    <td>
                        Ссылка
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        10$
                    </td>
                    <td>
                        Лучший брокер России 2021 по версии Forex.com
                    </td>
                    <td>
                        38 893
                    </td>
                    <td>
                        <Button txt='Открыть счёт' style='primary' handlerClick={() => setContextModal({show: true, status:1})} />
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        100$
                    </td>
                    <td>
                        Лучшие условия для открытия счета
                    </td>
                    <td>
                        254 824
                    </td>
                    <td>
                        <Button txt='Открыть счёт' style='primary' handlerClick={() => setContextModal({show: true, status:1})} />
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        50$
                    </td>
                    <td>
                        Обеспечивает полное страхование счетов
                    </td>
                    <td>
                        54 013
                    </td>
                    <td>
                        <Button txt='Открыть счёт' style='primary' handlerClick={() => setContextModal({show: true, status:1})} />
                    </td>
                </tr>
            </table>

            <Form status={0} />
        </div>
    )
}