import styled from '@emotion/styled';

const CardStat = ({count}: {count: number}) => {
  return (
    <CardStatStyled>
      <UserIcon/>
      <p>{count}</p>
    </CardStatStyled>
  );
};

export default CardStat;

const CardStatStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 3;
  background: #000;
  border-radius: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  padding: 0px 12px;
  text-transform: uppercase;
`;

const UserIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="16" height="16" viewBox="0 0 16 16" className="icon-players no-hover">
      <path d="M11.0052 2.06799C9.30139 2.06799 7.92018 3.4492 7.92018 5.15301C7.92018 6.85682 9.30139 8.23803 11.0052 8.23803C12.709 8.23803 14.0902 6.85682 14.0902 5.15301C14.0902 3.4492 12.709 2.06799 11.0052 2.06799ZM6.56576 11.685C6.86076 10.079 8.27734 8.97527 9.87459 8.97527H11.9866C13.5838 8.97527 15.0004 10.079 15.2954 11.685C15.4268 12.4004 15.5585 13.2075 15.6402 13.9481C15.7487 14.9312 15.3353 16.071 14.2306 16.4947C13.2962 16.8531 12.1146 17.0213 10.9306 16.9978C9.74655 17.0213 8.565 16.8531 7.63053 16.4947C6.52588 16.071 6.11246 14.9312 6.22095 13.9481C6.30269 13.2075 6.43435 12.4004 6.56576 11.685Z"></path>
      <path d="M1.71595 3.08502C1.71595 1.38121 3.09716 0 4.80097 0C6.16717 0 7.32596 0.888075 7.73153 2.11844C6.99293 2.91483 6.54136 3.98121 6.54136 5.15305C6.54136 5.30944 6.5494 5.46395 6.5651 5.61619C6.06516 5.96528 5.45698 6.17003 4.80097 6.17003C3.09716 6.17003 1.71595 4.78883 1.71595 3.08502Z"></path>
      <path d="M7.0023 7.13078C6.62032 6.98556 6.20774 6.90727 5.78234 6.90727H3.67036C2.07312 6.90727 0.656539 8.01101 0.361536 9.617C0.230127 10.3324 0.0984663 11.1395 0.0167307 11.8801C-0.0917684 12.8632 0.321661 14.003 1.42631 14.4267C2.36078 14.7851 3.54232 14.9533 4.72635 14.9298C4.77898 14.9309 4.8316 14.9315 4.8842 14.9318C4.81924 14.5401 4.81119 14.1527 4.85046 13.7969C4.93727 13.0103 5.07529 12.1673 5.20963 11.4359C5.4841 9.94176 6.43411 8.76673 7.6772 8.128C7.40979 7.82908 7.18207 7.49391 7.0023 7.13078Z">
      </path>
    </svg>
  );
};