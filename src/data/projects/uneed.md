---
title: "U-NEED  // Daniel Villalobos"
---

The development of **U-NEED** was carried out as part of the European Commission's <a href="https://www.upperprojecteu.eu/" target="_blank" rel="noopener noreferrer">**UPPER project**</a> while working at <a href="https://www.grupoetra.com/" target="_blank" rel="noopener noreferrer">**ETRA I+D**</a>. This tool serves as a **historical geospatial data visualizer**, supporting and enhancing multimodal public transportation systems.

### Purpose and Overview

**U-NEED** focuses on analyzing two fundamental datasets:

1. **Origin-Destination Matrices**: Visualizing travel distribution between public transport stops and vehicle flows between urban zones, it identifies population movement patterns. This allows urban planners to **optimize existing public transport lines** or **introduce new routes** tailored to citizens' needs.

2. **Multimodal Transport Services Distribution**: By mapping the availability of multimodal transport services, the tool identifies **underserved areas** or regions where **access to public transportation can be improved**.

This data-driven approach not only aids in **public transport optimization** but also plays a crucial role in **urban planning decisions**, such as:

- Establishing **Low Emission Zones (LEZ)**
- Designing **specialized transport lines**, like school-focused routes

### Key Features and Functionalities

**U-NEED** presents historical geospatial data through interactive and insightful visualizations, including:

- **Travel Distribution Visualization**: Displays movement patterns between stops and urban zones, helping planners to **identify high-demand corridors** and **optimize route planning**.

- **Public Transport Service Analysis**:
  - Maps the **distribution of multimodal services**, revealing areas with insufficient public transport coverage.
  - Facilitates **urban infrastructure planning** by pinpointing gaps in accessibility.

### Spatial Analysis Capabilities

The most powerful aspect of **U-NEED** lies in its **Spatial Analysis tools**, which empower users to combine multiple data sources or modify existing datasets to create custom analyses. These tools were designed to offer flexibility and scalability, although their full potential was not realized due to a professional shift.

Key spatial analyses included:

- **Accessibility Index**:

  - Provides a comprehensive view of service accessibility across urban areas.
  - For more details, see the <a href="/utwin#accessibility-index" target="_blank" rel="noopener noreferrer">**Accessibility Index**</a> section in **U-TWIN**.

- **Dynamic Buffer Analysis**:

  - Adjusts buffer sizes around **public transport stops** dynamically, visualizing **stop concentration** across the city.

- **No-Coverage Visualization**:
  - Calculates the **percentage of urban areas lacking public transport coverage** by excluding buffered transport zones from the city's total area.

These analytical tools offered significant insights into urban mobility patterns, paving the way for **data-driven decision-making** in public transportation planning.

### Future Potential

Several ambitious ideas were planned but not implemented, including:

- **Graph-Based Analysis and Isochrones**:
  - Using graph theory and isochrone calculations to **evaluate public transport accessibility** from various **points of interest**.
  - These analyses were aimed at exploring **travel time distributions** and identifying **potential connectivity improvements**.

These ideas will be explored in a **future personal project**, leveraging the foundational work laid out in **U-NEED**.

### Technology Stack

**U-NEED** was developed using a technology stack similar to **U-TWIN**, with the primary distinction being the use of <a href="https://kepler.gl/" target="_blank" rel="noopener noreferrer">**Kepler.GL**</a> instead of **Deck.GL** for geospatial visualization.

- **Frontend**:

  - Built with <a href="https://react.dev/)" target="_blank" rel="noopener noreferrer">**React**</a>, ensuring a dynamic and responsive user experience.
  - Styled with <a href="https://mui.com/)" target="_blank" rel="noopener noreferrer">**MUI**</a> for consistent UI components.

- **Visualization**:

  - **Kepler.GL** powered the interactive geospatial visualizations, offering flexible layer management and dynamic filtering capabilities.

- **Backend**:
  - Developed on <a href="https://www.meteor.com/)" target="_blank" rel="noopener noreferrer">**Meteor**</a> for real-time data synchronization.
  - Utilized <a href="https://www.mongodb.com/)" target="_blank" rel="noopener noreferrer">**MongoDB**</a> for:
    - **Database management**
    - **ETL pipelines** to ingest and process historical geospatial data
    - **Data storage and historical analysis** for generating insights

### Impact and Legacy

While **U-NEED** laid the groundwork for **advanced geospatial analytics** and **multimodal transport planning**, its full potential remains untapped. The tool’s conceptual framework and flexible architecture provide an excellent foundation for **future innovations** in urban mobility and smart city planning.

With the possibility of integrating **graph-based analysis** and **isochrones**, **U-NEED** represents an ambitious step towards **intelligent transportation systems** and **data-driven urban planning**.

This journey, although paused due to a career transition, will continue in a **future personal project**, where the vision of creating a **comprehensive urban mobility analytics platform** will be fully realized.

---
