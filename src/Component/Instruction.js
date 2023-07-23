import React from 'react';
import './InstructionPage.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

const InstructionPage = () => {
  return (
    <div className='Instructionbody'>
      <header className="headerinstruction">
        {/* Your header content here */}
        {/* Example: <i className="fas fa-home"></i> | <i className="fas fa-dollar-sign"></i> | <i className="fas fa-images"></i> | <i className="fas fa-envelope"></i> | Profile Icon */}
      </header>

      <main>
        <section className="instruction-section">
          <h2 className="instruction-title">How to Use the 3D Room Renovation Tool</h2>
          <ol className="instruction-list">
          <NavLink to="/Home">    <li><i className="fas fa-home"></i> On the Home page, you will find options As Contact, Pricing, Tuotorial, Portfolio, Registration, Profile  Icon.</li></NavLink>
          <NavLink to="/Register">   <li><i className="fas fa-user-plus"></i> If you are a new user, go to the Registration page to create an account.</li></NavLink>
          <NavLink to="/Login1">  <li><i className="fas fa-sign-in-alt"></i> If you already have an account, log in using your email and password.</li></NavLink>
          <NavLink to="/ForgotPassword"> <li><i className="fas fa-key"></i> You can also reset your password if you have forgotten it.</li></NavLink>
          <NavLink to="/Home">  <li><i className="fas fa-check"></i> After successful login, click the "Get Started" button on the Home page.</li></NavLink>
          <NavLink to="/Portfolio"><li><i className="fas fa-images"></i> In the Portfolio, you can choose from pre-made templates or design a custom room.</li></NavLink>
          <NavLink to="/Parameter">  <li><i className="fas fa-cogs"></i> If you select the custom design option, you will be directed to the Parameter page.</li></NavLink>
          <NavLink to="/Paraneter"> <li><i className="fas fa-ruler-combined"></i> In the Parameter page, you can select the shape, width, and height of the room.</li></NavLink>
          <NavLink to="/CustomDesign"> <li><i className="fas fa-palette"></i> Once the parameters are set, proceed to the Custom Design page.</li></NavLink>
          <NavLink to="/CustomDesign">  <li><i className="fas fa-couch"></i> In the Custom Design page, you will find various models like floors, roofs, beds, chairs, tables, windows, and dining tables.</li></NavLink>
          <NavLink to="/CustomDesign">  <li><i className="fas fa-arrows-alt"></i> Use the keys provided for movement and rotation (left, right, up, down, left rotation, right rotation) to design your room.</li></NavLink>
          <NavLink to="/CustomDesign">  <li><i className="fas fa-paint-roller"></i> There is a color picker on the right side to change the color of walls, roof, and floor.</li></NavLink>
          <NavLink to="/CustomDesign"> <li><i className="fas fa-download"></i> After building your design, you can download the model using the "Download" button or delete it using the "Delete" button.</li></NavLink>
          <NavLink to="/Payment"> <li><i className="fas fa-money-bill-wave"></i> If you choose to download the model, you will be shown a payment card for payment (Paid Designs).</li></NavLink>
          <NavLink to="/Pricing"> <li><i className="fas fa-gift"></i> You can also design rooms for free without any payment (Free Designs).</li></NavLink>
          </ol>
        </section>
      </main>

      <footer className="Instructionfooter">
        {/* Your footer content here */}
      </footer>
    </div>
  );
};

export default InstructionPage;
