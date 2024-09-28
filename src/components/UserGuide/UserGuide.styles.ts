import styled from "styled-components";
import { Drawer } from "antd";

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    scroll-behavior: smooth;
    overflow-y: auto; 
    padding-top: 0;
    padding-bottom: 0;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(128, 128, 128, 0.6); 
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(128, 128, 128, 0.8);
    }

    ::-webkit-scrollbar-track {
      background-color: transparent; 
    }

    scrollbar-width: thin; 
    scrollbar-color: rgba(128, 128, 128, 0.6) transparent;
  }  
`;