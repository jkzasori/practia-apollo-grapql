import PropTypes from "prop-types";
import { GeneralInformationContainer } from "./styles";
import logoElenas from "../../assets/elenasLogo.svg";

const GeneralInformation = ({ title, description, logo = false }) => {
  return (
    <GeneralInformationContainer>
      {logo ? <img src={logoElenas} alt="Elenas" /> : ""}
      <h1>{title}</h1>
      <p>{description}</p>
    </GeneralInformationContainer>
  );
};

GeneralInformation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.bool,
};

export default GeneralInformation;
