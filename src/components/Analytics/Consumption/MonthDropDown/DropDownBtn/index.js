import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import { dropDownState } from "../../../../../store/dropDown";
import { useSetRecoilState } from "recoil";

const DropDownBtn = ({ title }) => {
  const setOpenDropDown = useSetRecoilState(dropDownState);
  return (
    <DropDownContainer
      onStartShouldSetResponder={() => setOpenDropDown((prev) => !prev)}
    >
      <DropDownTitle>{title} 내 소비</DropDownTitle>
      <IconContainer>
        <Icon name="caretdown" />
      </IconContainer>
    </DropDownContainer>
  );
};

export default DropDownBtn;

const DropDownContainer = styled.View`
  /* display: flex; */
  flex-direction: row;
  align-items: center;
  margin: 20px 0 28px;
`;

const DropDownTitle = styled.Text`
  width: 100px;
  color: #434343;
  font-weight: 700;
  font-size: 18px;
`;

const IconContainer = styled.View`
  width: 50px;
`;
