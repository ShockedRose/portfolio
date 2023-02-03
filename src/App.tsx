import './app.scss'
import { Login } from './components/molecules/login/login'
import { Otp } from './components/organisms/otp/otp'

function App() {
  return (
    <div className="app">
      <Login />
      <Otp
        titleOtp={'Titulo'}
        description={
          'Confirma tu transferencia ingresando el código de 6 números que llegará a tu correo electrónico jxxxxa@gmail.com y/o celular 09xxxxx651'
        }
        timer={30}
        stateResend="success"
        typePassword={true}
        fullWidth={false}
        nextButtonLabel="Continuar"
        backButtonLabel="Volver"
        clickContinue={() => console.log('clickContinue')}
        clickGoBack={() => console.log('clickGoBack')}
        timeExpired={() => console.log('timeExpired')}
        clickResend={() => console.log('clickResend')}
      />
    </div>
  )
}

export default App
