import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: vw;
  heigth: vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-image: white;
    background-position: center;
  }
`;

export const CampaignStatusMainDiv = styled.div`
  width: 100%;
  height: 100%;
  aling-items: center;
  justify-content: center;

`;


export const CampaignStatusTitle = styled.h1`
  text-align: left;
  padding: 5%;
  font-size: 130%;
`;

export const CampaignStatusImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;




export const CampaignStatusImage = styled.img`
  border-radius: 1em;
  padding: 2%;
  width: 45%;
`;


export const CampaignStatusSubtitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;


export const CampaignStatusSubtitle = styled.span`
  text-align: justify;
  padding: 3%;
  font-size: 80%;
`;

export const CampaignStatusBoxStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5%;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%; 
  background-color: #FFE600;
  border-radius: 4px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CampaignStatusBoxText = styled.span`
  font-size: .8em;
`;

export const CampaignStatusNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;
  width: 25%;
  margin-top: 3%;
  margin-left: 5%; 
  background-color: rgba(250, 250, 250, 5);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CampaignStatusNumber = styled.span`
  text-align: center;
  padding: 3%;
  font-size: .8em;
`;

export const CampaignStatusGridImage = styled.div`
  display: flex;
  flex-direction: grid;
  flex-wrap: wrap;
  align-items: center;
  padding: 4%;
  width: 90%;
  margin-top: 4%;
  margin-left: 5%; 
  margin-bottom: 2%;
  background-color: rgba(240, 240, 240,1);
`;

export const CampaignStatusMinGrid = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 3%;
  gap: .6em;
  width: 30%;
  margin-top: 1.75%;
  margin-left: 2.5%;
  margin-bottom: 1.75%;
  border-radius: 4%;
  background-color: rgba(250, 250, 250, 5);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CampaignStatusImageMini = styled.img`
  width: 65%;
  border-radius: 50px;
`;

export const CampaignStatusVoluntaryName = styled.span`
  font-size: .8em;
`;

export const CampaignStatusDivCardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 90%;
  margin-top: 4%;
  margin-left: 5%; 
  margin-bottom: 5%;
`;

export const CampaignStatusDivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;
  width: 95%;
  margin-top: 8%;
  margin-left: 2.5%; 
  margin-bottom: 5%;
  background-color: rgba(250, 250, 250, 5);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;

export  const CampaignStatusCardTitle = styled.h1`
  text-align: left;
  font-size: 130%;
`;

export const CampaignStatusCardVoluntaryStatus = styled.span`
  text-align: left;
  font-size: .7em;
  margin-bottom: 2%;
  color: #888; 
  font-weight: 300;
`;

export const CampaignStatusCardTextDescription = styled.span`
  text-align: justify;
  font-size: .75em;
`;


export const CampaignStatusDivIconeCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  padding: 2%;
  width: 30%;
  margin-bottom: 1.75%;
  border-radius: 50%;
`;

export const CampaignStatusIconeCard= styled.img`
  width: 65%;
  border-radius: 50px;
  border: 1.5px solid orange;
`;


export const CampaignStatusVoluntaryButtom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%; 
  padding: 2%;
  margin-top: 1em;
  margin-left: 5%;
  margin-bottom: 25%;
  background-color: rgb(150,255,150);
  border-radius: 4px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CampaignStatusTextButtom = styled.span`
  text-align: center;
  padding: 3%;
  font-size: .8em;
`;
