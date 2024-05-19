import Dashboard from "../pageObjects/actionUrgentCareObjects";

describe('Book Appointment Functionality', () => {
    const dashboard = new Dashboard();
    let appointmentInfo

    beforeEach(() => {
        cy.visit('https://actionurgentcare.com/');
    });

    before(() => {
        cy.fixture('appointment').then((bookInfo) => {
            appointmentInfo = bookInfo;
        });
    });

    it('Check locaton details from the In-Clinic Care Drop-Down', () => {

        dashboard.getBrandLogo().should('be.visible');
        dashboard.getInClinicCare().should('be.visible');
        dashboard.getVirtualVisit().should('be.visible');
        dashboard.getPayMyBill().should('be.visible');
        dashboard.getForEmployers().should('be.visible');

        dashboard.getInClinicCare().trigger('mouseover');
        dashboard.getLoactionList().contains(appointmentInfo.location).click();
        
        dashboard.getServices().contains('Urgent care').should('be.visible')
        dashboard.getServices().contains('Primary care').should('be.visible')   
        dashboard.getServices().contains('Specialists').should('be.visible')

        dashboard.getNextForwardButton().eq(1).click();

    });

    it('Check Clinic Map and Clinic List', () => {

        dashboard.getMap().should('be.visible');

        dashboard.getClinicListButton().click();
        dashboard.getSearchBar().type(appointmentInfo.location);
        dashboard.getBookAppointment().contains(appointmentInfo.location).click();

        dashboard.getBookAppointment().eq(2).should('have.text', appointmentInfo.location);
        dashboard.getBookAppointment().eq(3).should('have.text', appointmentInfo.address);

        dashboard.getSeeAppmtsButton().click();
    });
    
    it('Check Available times and reasons from location sections in the footer menu', () => {
        
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const formattedToday = today.toLocaleDateString('en-US', options);
        const formattedTomorrow = tomorrow.toLocaleDateString('en-US', options);
    
        dashboard.getFooterMenu().contains(appointmentInfo.location).click();
        dashboard.getNextButton().click();
        dashboard.getPreviousButton().click();

        dashboard.getBookAppointment().eq(0).should('have.text', appointmentInfo.title);
        dashboard.getBookAppointment().eq(1).should('have.text', appointmentInfo.location);
        dashboard.getBookAppointment().eq(2).should('have.text', appointmentInfo.stateAddress);
        dashboard.getPhoneNumber().should('be.visible');
        dashboard.getAppointmentDate().contains(formattedToday).should('be.visible');
        dashboard.getAppointmentDate().contains(formattedTomorrow).should('be.visible');

        dashboard.getAvailableTimes().eq(0).scrollIntoView().click();

        dashboard.getSelectButton().should('be.enabled');

        dashboard.getSelectButton().scrollIntoView().click();
        dashboard.getContinueButton().click();

        dashboard.getErrorMessage().should('have.text', appointmentInfo.error);

        dashboard.getReasons().contains('Cough').click();
        dashboard.getReasons().contains('Other').click();

        dashboard.getTextxBoxInfo().should('have.text', appointmentInfo.textBoxInfo);

        dashboard.getTextBox().scrollIntoView().type(appointmentInfo.textBoxReason);
        //dashboard.getContinueButton().click(); exit criteria, starts rediract 
    });

  });