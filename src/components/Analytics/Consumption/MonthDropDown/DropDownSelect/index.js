import styled from "styled-components/native";
import { dropDownState } from "../../../../../store/dropDown";
import { useSetRecoilState } from "recoil";

const DropDownSelect = ({ setMonthIndex }) => {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const setOpenDropDown = useSetRecoilState(dropDownState);
  return (
    <SelectDropDownContainer>
      {month.map((item, index) => {
        return (
          <DropDownText
            onPress={() => {
              setOpenDropDown((prev) => !prev);
              setMonthIndex(index);
            }}
          >
            {item}월
          </DropDownText>
        );
      })}
    </SelectDropDownContainer>
  );
};

export default DropDownSelect;

const outSideContainer = styled.View``;

const SelectDropDownContainer = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
}))`
  width: 400px;
  height: 180px;
  z-index: 1;
  position: absolute;
  background-color: #ffffff;
  bottom: -262;
  left: -10;
`;

const DropDownText = styled.Text`
  text-align: center;
  line-height: 45;
  width: 180px;
  height: 45px;
  font-weight: 400;
  font-size: 18px;
  color: #434343;
`;
