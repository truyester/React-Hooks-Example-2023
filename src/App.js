import { Button } from "./components/Button";
import { Todos } from "./components/Todos";
import { TodoForm } from "./components/TodoForm";
import Footer from "./components/Footer";
import { TodoContextProvider } from "./context/todoContext";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <TodoContextProvider>
          <header className=" flex justify-between p-5">
            <h1 className="flex items-center justify-center text-xl font-medium">
              Agenda
            </h1>
            <Button
              ButtonFunction={"add"}
              hover={"hover:bg-green-600"}
              color={"bg-green-700"}
              text={"Agregar"}
            />
          </header>
          <TodoForm />
          <main className=" flex flex-col align-middle">
            <Todos />
          </main>
          <Footer />
        </TodoContextProvider>
      </div>
    </>
  );
}

export default App;
