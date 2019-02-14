import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal'


const data = [
    {
        id: 0,
        title: 'Английский',
        text: `английский выучить несложно
спросили вай ответь бекоз
спросили дринкин отвечаешь
офкоз`
    },
    {
        id: 1,
        title: 'У участковых терапевтов',
        text: `у участковых терапевтов
лишь два вопроса для больных
зачем приперся с пустяками
и где ж ты раньше был родной`
    },
    {
        id: 2,
        title: 'Мадам',
        text: `вчера с мадам одной гуляли
бродячий пес напал на нас
я убежал от этой твари
увы собака не спаслась`
    }];

const ALERT_LENGTH=3

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            show: false,
            currentId: 0,
            alerts: [],
            currentAlertId:0,
        }

    }

    addAlert = (alert) => {
        let alerts = [...this.state.alerts];
        if (this.state.alerts.length==ALERT_LENGTH){

            alerts.shift()
        }
        this.setState({alerts: [...alerts, alert],currentAlertId:this.state.currentAlertId+1})
    }

    removeAlert = (id = 0) => {
        let alerts = [...this.state.alerts];
        if (id === 0) {

            alerts.splice(0,1)
            console.log(alerts)
        } else {
            let alertId = this.state.alerts.findIndex(alert => {

                return alert.id === id;
            });
            alerts.splice(alertId, 1)
            console.log(alerts)
        }

        this.setState({alerts: alerts})
    }

    showModal = () => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false});
    }

    next = () => {
        if(this.state.currentId===data.length-1){
            this.addAlert({id: this.state.currentAlertId, class: 'alert-warning', text: 'Пирашки закончились!!'})
        }
        else
        this.setState({currentId: this.state.currentId + 1});
    }

    prev = () => {
        if(this.state.currentId===0){
            this.addAlert({id: this.state.currentAlertId, class: 'alert-warning', text: 'Пирашков еще нет!'})
        }
        else
        this.setState({currentId: this.state.currentId - 1});
    }


    closed = this.hideModal;

    continued = this.showModal;

    render() {
         console.log(this.state.alerts)
        const buttons = [
            {type: 'primary', label: '<<Prev', clicked: this.prev},
            {type: 'primary', label: 'Next>>', clicked: this.next},
            {type: 'danger', label: 'Close', clicked: this.closed},
            {
                type: 'success',
                label: 'Класс',
                clicked: () => this.addAlert({id: this.state.currentAlertId, class: 'alert-success', text: 'Классно'})
            },
            {
                type: 'primary',
                label: 'Зачот',
                clicked: () => this.addAlert({id: this.state.currentAlertId, class: 'alert-primary', text: 'Зачотно'})
            },
            {
                type: 'warning',
                label: 'Ахтунг',
                clicked: () => this.addAlert({id: this.state.currentAlertId, class: 'alert-warning', text: 'Ахтунг!!!'})
            },
            {
                type: 'danger',
                label: '!!!!!!',
                clicked: () => this.addAlert({
                    id: this.state.currentAlertId,
                    class: 'alert-danger',
                    text: 'Аффтор, выпей йаду!'
                })
            },
        ];

        return (
            <div className="App">
                <header>Горячие пирашки!</header>
                <Modal show={this.state.show}
                       cancel={this.hideModal}
                       buttons={buttons}
                       alerts={this.state.alerts}
                       close={this.removeAlert}
                >
                    <h3>{data[this.state.currentId].title}</h3>
                    <p>{data[this.state.currentId].text}</p>
                </Modal>

                <button onClick={this.showModal}>Смотрим!</button>
            </div>
        );
    }
}

export default App;
