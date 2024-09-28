import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import '@testing-library/jest-dom';
import { Navbar } from '../../components/Navbar';

describe('Navbar Component', () => {
  it('should render the navbar with correct menu items', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const addJobsItem = screen.getByText("Add Jobs");
    const resultsItem = screen.getByText("See results");

    expect(addJobsItem).toBeInTheDocument();
    expect(resultsItem).toBeInTheDocument();
  });

  it('should highlight the "Add Jobs" item as selected initially', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const addJobsItem = screen.getByText("Add Jobs");
    expect(addJobsItem.closest('li')).toHaveClass('ant-menu-item-selected');
  });

  it('should change selected menu item when clicked', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const addJobsItem = screen.getByText("Add Jobs");
    const resultsItem = screen.getByText("See results");

    expect(addJobsItem.closest('li')).toHaveClass('ant-menu-item-selected');
    
    fireEvent.click(resultsItem);
    expect(resultsItem.closest('li')).toHaveClass('ant-menu-item-selected');
    expect(addJobsItem.closest('li')).not.toHaveClass('ant-menu-item-selected');
  });
});
