import styled from "@emotion/styled"
import wartradeLogo from "./../../Media/Logos/wartradeLogo.webp"

const AboutEvent = () => {
  return (
    <StyledAboutEvent>
      <img src={wartradeLogo} alt="wartrade logo" />
      <div className="info">
        <h2>About Event</h2>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem deleniti optio deserunt architecto assumenda. Odio
          consequatur iste omnis dolore, quod placeat recusandae culpa, sint
          necessitatibus ipsum autem pariatur accusantium reprehenderit quia!
          Praesentium, eaque explicabo consequatur hic architecto voluptatum
          aperiam doloribus nesciunt omnis ipsa quis natus nihil esse animi.
          Quasi porro in magni id minima vitae repellendus, fugiat numquam
          obcaecati sint error nobis odio explicabo ad facere amet officia
          dignissimos cumque quas quos ipsam vel. Expedita, fugit obcaecati
          harum voluptatum, in animi molestias, tempore rerum sed architecto ad?
          Cum, porro id. Dolores ratione error temporibus, voluptas unde natus
          corrupti nulla illo, voluptatem, quo consequatur! Similique saepe
          laudantium minima ea magni? Veniam soluta voluptatibus reprehenderit!
          Alias, expedita quidem? Mollitia ipsa accusamus quo.
        </p>
      </div>
    </StyledAboutEvent>
  )
}

const StyledAboutEvent = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, var(--bg) 5%, var(--secondary));

  padding: var(--padding);

  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 35%;
    object-fit: cover;
    filter: drop-shadow(-2px -2px 50px #0008);
  }
  .info {
    width: 50%;
    color: #fff;
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
`

export default AboutEvent
