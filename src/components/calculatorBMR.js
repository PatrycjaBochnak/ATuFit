import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { calculateMacrosAmount } from "../../../utils/calculators";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import { 
    Form,
    Button,
    Select,
    FormContainer,
    Input,
    StyledSpan,
    Container, 
  } from "./BMRCalculatorStyles";
  import { useSelector, useDispatch } from "react-redux";
  import { updateProfile } from "../../../store/auth";
  import { currentCategoryRemoved } from "../../../store/helpers";
  import Item from "../../molecules/Item/Item";
  import Items from "../../molecules/Items/Items";
  

class calculatorBMR extends React.Component {
    render () {
        return
  
const BMRCalculator = ({
  editMode,
  noMarginTop,
  alternateView,
  marginLeft,
}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  const currentUser = useSelector((state) =>
    state.user.authData.currentUser ? state.user.authData.currentUser : ""
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user?.credential, currentUser]);

  let { bmr, tdee, gender, activity } = useSelector((state) =>
    state.user.authData.currentUser?.profile.bmr
      ? state.user.authData.currentUser.profile
      : { bmr: null, tdee: 0, gender: "male" }
  );

  const { protein, carbs, fat, height, weight, age } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile.demandPercentage
      : {
          protein: 0,
          carbs: 0,
          fat: 0,
          activity: 0,
          height: 0,
          weight: 0,
          age: 0,
        }
  );

  const {
    register: registerBMR,
    handleSubmit: handleSubmitBMR,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      height,
      weight,
      age,
      gender,
      activity,
    },
  });

  const calculateBMR = async ({ height, weight, age, gender, activity }) => {
    const genderModifier = gender === "male" ? 5 : -161;

    const bmr = parseInt(
      10 * weight + 6.25 * height - 5 * age + genderModifier
    );

    const tdee = parseInt(bmr * activity);

    const demandPercentage = { protein, carbs, fat };
    const demandAmount = calculateMacrosAmount(tdee, protein, carbs, fat);

    const data = {
      weight,
      height,
      gender,
      age,
      activity,
      bmr,
      tdee,
      demandPercentage,
      demandAmount,
    };

    dispatch(updateProfile({ id: user.clientId, profile: data }));

    editMode && dispatch(currentCategoryRemoved());
  };

  return (
    <FormContainer
      noMarginTop={noMarginTop}
      alternateView={alternateView}
      marginLeft={marginLeft}
    >
      {alternateView && (
        <Items nowrap nogap>
          <Item
            primary={currentUser?.profile?.bmr || 0}
            secondary={"BMR"}
            margin={"1rem 0.5rem"}
            smMargin={"0.5rem 1rem"}
          />
          <Item
            primary={currentUser?.profile?.tdee || 0}
            secondary={"TDEE"}
            margin={"1rem 0.5rem"}
            smMargin={"0.5rem 1rem"}
          />
        </Items>
      )}
      {!user?.credential && (
        <Container>
          <LinkItem
            hash={1}
            add={1}
            smooth={1}
            color={"white"}
            padding={"0.8rem"}
            margin={"6.5rem 0"}
            radius={"10px"}
            to={"/auth#top"}
            children={"Calculate BMR / TDEE"}
            size={"0.8rem"}
          />
        </Container>
      )}
      {((user?.credential && !bmr) || editMode) && (
        <Form onSubmit={handleSubmitBMR(calculateBMR)}>
          {!alternateView && (
            <StyledSpan>
              BMR: {bmr} / TDEE: {tdee}
            </StyledSpan>
          )}
          <Input
            type="number"
            placeholder={"Height(cm)"}
            {...registerBMR("height", {
              valueAsNumber: true,
              max: 250,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Input
            type="number"
            placeholder={"Weight(kg)"}
            {...registerBMR("weight", {
              valueAsNumber: true,
              max: 500,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Input
            type="number"
            placeholder={"Age"}
            {...registerBMR("age", {
              valueAsNumber: true,
              max: 110,
              min: 1,
              required: true,
              maxLength: 3,
              pattern: /\d+/,
            })}
          />
          <Select
            {...registerBMR("gender", {
              required: true,
            })}
          >
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </Select>
          <Select
            {...registerBMR("activity", {
              valueAsNumber: true,
              required: true,
            })}
          >
            <option value={1.2}>No exercise</option>
            <option value={1.375}>Light: 1-3 times per week</option>
            <option value={1.55}>Moderate: 3-5 times per week</option>
            <option value={1.725}>Heavy: 5-6 times per week</option>
            <option value={1.9}>Very heavy: 6-7 times per week</option>
          </Select>
          <Button type="submit">{editMode ? "Update" : "Calculate"}</Button>
        </Form>
      )}
      {bmr && !editMode && (
        <Container>
          <StyledSpan>
            BMR: {bmr} / TDEE: {tdee}
          </StyledSpan>
        </Container>
      )}
    </FormContainer>
  );
};
    }
}; 

export default calculatorBMR; 