import React from 'react'
import './MeetInstructors.css';
import styled,{keyframes,css} from 'styled-components';

const Reviews = () => {
    const row=[
        "https://imgv3.fotor.com/images/gallery/Cartoon-Male-Headshot.jpg",
        "https://img.freepik.com/premium-photo/illustration-man-abstract-art-ai-generated_57312-1412.jpg",
        "https://img.freepik.com/premium-photo/man-with-glasses-tie-is-wearing-suit-glasses_905510-4291.jpg",
        "https://img.freepik.com/premium-photo/digital-painting-man-wearing-hoodie-glasses_759095-16732.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698364800&semt=ais",
        "https://img.freepik.com/premium-photo/man-with-glasses-scarf-neck-standing-market_787273-203.jpg",
        "https://www.sciencebase.com/images/blind-girl.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg4QhqaQqU7__c_Gs5AVPArl0hq809On08d91j-cIbSa3brmK0WrVzKkv2_sKE3g-3cc&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONOD7XZPc0YKBJal-0TtHP1GKdBjnf7nEfEftDhBw1-z9wdZ_OqQ2NZ2uXYoW1Jpwlw0&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcJpR8weZexAv0sbBaPDZp2KmpEqCO6HPsMuAgrM-e20o2Ht77azF3_lXugz4aCBEeH8&usqp=CAU",
        "https://img.freepik.com/premium-photo/event-planner-digital-avatar-generative-ai_934475-9239.jpg",
    ];

    const row2 = [
        "James",
        "Liam",
        "Noah",
        "​ ​ ​ ​Benjamin",
        "​ ​ ​ ​​ ​ ​Ryan",
        "​ ​ ​ ​Sophia",
        "​ ​ ​ ​Mason",
        "Cameron",
        "Riley",
        "Quinn"
      ];
    
  return (
    <div className='MainCont'>
      <div className='top'><h1>Meet Your <span style={{color:"#6674cc"}}>Instructors</span></h1></div><hr style={{width:"95%",marginLeft:"2rem", height: "5px"}}/>
      <div className='bottom'>
        <Marquee>
            <MarqueeGroup >
                {
                    row.map(el=>(
                        <ImageGroup>
                          <Image src={el}/>  
                        </ImageGroup>
                    )
                    
                    )
                }

            </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Headin>
                 {el}
                </Headin>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </div>
    </div>
  )
}

export default Reviews;

const Marquee=styled.div`
    display:flex;
    width:1200px;
    user-select:none;
    overflow: hidden;
`
const scrollX = keyframes`
  from {
    left: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup=styled.div`
${common}
`


const ImageGroup=styled.div`
display: grid;
place-items: center;
width: clamp(10rem, 1rem + 40vmin, 30rem);
padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`

const Headin=styled.div`
display:flex;
font-size:2rem;
width: clamp(10rem, 1rem + 40vmin, 30rem);
padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
justify-content:space-between;
object-fit: contain;
width: 15rem;
height:15rem;
margin-left:3.5rem;
aspect-ratio: 16/9;
padding: 5px 20px;

`
const MarqueeGroup2 = styled.div`
  ${common}
  
`;
const Image = styled.img`
  object-fit: cover;
  width: 15rem;
  height:15rem;
  border-radius: 50%;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  
`;

