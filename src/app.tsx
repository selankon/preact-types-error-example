import {ComponentChildren} from "preact";

export const SectionTitle = ({ children }: {children: ComponentChildren}) => {
    return (
        <div>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <SectionTitle children={""}>
            Hello World
        </SectionTitle>
    );
}
export default App;
