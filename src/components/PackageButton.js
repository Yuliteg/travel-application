import styled from "styled-components";

const PackageButton = ({ category, active, filterItems }) => {
  return (
    <Button
      type="button"
      onClick={() => filterItems(category)}
      className={active ? "active" : ""}
    >
      {category}
    </Button>
  );
};

export default PackageButton;

const Button = styled.button`
  padding: 2rem 2rem;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
  color: white;
  background-color: ${(props) => (props.active ? "plum" : "#73a073")};
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: plum;
  }
`;
