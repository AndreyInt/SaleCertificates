import cls from './app.module.css'
import {AppRoutes} from "./routes/AppRoutes";
const App = () => {

        return (
            <div className={cls.app}>
                <AppRoutes/>
            </div>
        );
}


export default App;