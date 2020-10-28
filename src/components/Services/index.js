import React from "react";
import {services} from '../../consts';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {services.map((service, index) => {
          return (
            <ServicesCard key={index}>
              <ServicesIcon src={service.icon} />
              <ServicesH2>{service.name}</ServicesH2>
              <ServicesP>
                {service.description}
              </ServicesP>
            </ServicesCard>
          );
        })}
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
