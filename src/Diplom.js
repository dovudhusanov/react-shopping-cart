import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function Diplom(props) {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/api/info/diploma?param=9b9935f7-dd95-42ad-9306-d3dcdc5b074b");
    }, [window.location.pathname]);

    return (
        <section className="invoice">
            <div className="row">
                <div className="col-xs-12">
                    <h4 className="text-center">
                        <b>BITIRUVCHINING SHAXSIY MA'LUMOTLARI</b>
                    </h4>
                    <table className="table table-striped table-bordered table-responsive">
                        <tbody>
                        <tr>
                            <th>Familiya:</th>
                            <td>SAIBBAEV</td>
                        </tr>
                        <tr>
                            <th>Ismi:</th>
                            <td>NURIDDINJON</td>
                        </tr>
                        <tr>
                            <th>Pasport raqami:</th>
                            <td>AA6109682</td>
                        </tr>
                        <tr>
                            <th>Tug‘ilgan sana:</th>
                            <td>08.06.1993</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <div className="clearfix"></div>

            <div className="row">
                <div className="col-xs-12">
                    <h4 className="text-center">
                        <b>BITIRUVCHINING TA'LIM MA'LUMOTLARI</b>
                    </h4>
                    <table className="table table-striped table-bordered table-responsive hei-info">
                        <tbody>
                        <tr>
                            <th>OTM:</th>
                            <td>Namangan muhandislik-texnologiya instituti</td>
                        </tr>
                        <tr>
                            <th>Mutaxassislik:</th>
                            <td>Texnologik mashinalar va jihozlar (tarmoqlar bo‘yicha)</td>
                        </tr>
                        <tr>
                            <th>Ta’lim turi:</th>
                            <td>Bakalavr</td>
                        </tr>
                        <tr>
                            <th>Ta’lim shakli:</th>
                            <td>Kunduzgi</td>
                        </tr>
                        <tr>
                            <th>Diplom raqami:</th>
                            <td>B00117189</td>
                        </tr>
                        <tr>
                            <th>Qayd sanasi:</th>
                            <td>09.07.2021</td>
                        </tr>
                        <tr>
                            <th>O‘rtacha ball:</th>
                            <td>65.00</td>
                        </tr>
                        <tr>
                            <th>Diplom toifasi:</th>
                            <td>Oddiy</td>
                        </tr>
                        <tr>
                            <th>O‘qishga kirgan yili:</th>
                            <td>2017</td>
                        </tr>
                        <tr>
                            <th>O‘qish muddati:</th>
                            <td>4</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </section>
    );
}

export default Diplom;