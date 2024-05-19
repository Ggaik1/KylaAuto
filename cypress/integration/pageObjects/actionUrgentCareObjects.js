class Dashboard {

    getClinicListButton() {
        return cy.get('[tabindex="0"]').contains('Clinic List');
    }

    getSeeAppmtsButton() {
        return cy.get('[tabindex="0"]').contains('See Available Appointments');
    }

    getNextButton() {
        return cy.get('[tabindex="0"]').contains('Next');
    }

    getContinueButton() {
        return cy.get('[tabindex="0"]').contains('Continue');
    }

    getPreviousButton() {
        return cy.get('[tabindex="0"]').contains('Previous');
    }

    getSelectButton() {
        return cy.get('.MuiGrid-root.MuiGrid-item.jss26.css-1wxaqej').contains('Select');
    }

    getPhoneNumber() {
        return cy.get('[tabindex="0"]').contains('(408) 645-7073');
    }

    getInClinicCare() {
        return cy.get('.dropdown-toggle.nav-link').eq(0);
    }

    getLoactionList() {
        return cy.get('.Header_navbarDropdownLink__V0KDA.dropdown-item');
    }

    getBookAppointment() {
        return cy.get('.MuiTypography-root');
    }

    getSearchBar() {
        return cy.get('.jss38');
    }

    getFooterMenu() {
        return cy.get('.FooterMenu_menuList__oFAF0');
    }

    getAppointmentDate() {
        return cy.get('.MuiTypography-root.MuiTypography-body1.jss46.css-9l3uo3');
    }

    getAvailableTimes() {
        return cy.get('.MuiTypography-root.MuiTypography-body1.jss69.css-9l3uo3');
    }

    getErrorMessage() {
        return cy.get('.MuiTypography-root.MuiTypography-caption.css-164288v').eq(0);
    }

    getReasons() {
        return cy.get('.MuiBox-root.css-240zvz');
    }

    getTextxBoxInfo() {
        return cy.get('.MuiTypography-root.MuiTypography-body1.jss78.css-9l3uo3')
    }

    getTextBox() {
        return cy.get('.jss82.MuiInputBase-input.MuiInputBase-inputMultiline.css-10oer18').eq(0);
    }

    getServices() {
        return cy.get('.fs-5.fw-bold');
    }

    getBlossomHillDescription() {
        return cy.get('.fs-5.fw-normal');
    }

    getNextForwardButton() {
        return cy.get('.ClinicImagesCarouselArrows_btn__xTkPb.btn.btn-white')
    }

    getMap() {
        return cy.get('.gm-style')
    }

    getBrandLogo(){
        return cy.get('.navbar-brand')
    }

    getVirtualVisit() {
        return cy.get('.nav-link').eq(0)
    }
    getPayMyBill() {
        return cy.get('.nav-link').eq(1)
    }
    getForEmployers() {
        return cy.get('.nav-link').eq(2)
    }
}

export default Dashboard 