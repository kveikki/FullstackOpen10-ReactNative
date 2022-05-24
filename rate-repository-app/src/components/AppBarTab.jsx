import { Pressable } from "react-native";
import { Subheading } from "./Text";

const AppBarTab = ({ children }) => {
    return (<Pressable>
        <Subheading fontWeight='bold' color='textOnColored'>
            {children}
        </Subheading>
    </Pressable>);
};

export default AppBarTab;