import React from "react";

function Logo() {
  const svgContent = `
    <svg width="67" height="36" viewBox="0 0 67 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <svg width="67" height="36" viewBox="0 0 67 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.032 30C13.104 30 12.264 29.808 11.512 29.424C10.776 29.024 10.144 28.456 9.616 27.72C9.088 26.968 8.68 26.064 8.392 25.008C8.12 23.936 7.984 22.728 7.984 21.384C7.984 20.072 8.128 18.872 8.416 17.784C8.704 16.696 9.112 15.768 9.64 15C10.184 14.232 10.832 13.64 11.584 13.224C12.352 12.792 13.2 12.576 14.128 12.576C15.056 12.576 15.896 12.792 16.648 13.224C17.4 13.64 18.04 14.232 18.568 15C19.096 15.768 19.504 16.688 19.792 17.76C20.08 18.816 20.224 19.984 20.224 21.264C20.224 21.936 20.16 22.6 20.032 23.256C19.92 23.912 19.752 24.52 19.528 25.08C19.32 25.64 19.072 26.128 18.784 26.544C18.512 26.96 18.224 27.272 17.92 27.48V27.576L20.944 27.528V30H14.032ZM17.272 21.384C17.272 20.536 17.2 19.744 17.056 19.008C16.928 18.272 16.728 17.64 16.456 17.112C16.184 16.568 15.848 16.144 15.448 15.84C15.064 15.52 14.624 15.36 14.128 15.36C13.616 15.36 13.16 15.52 12.76 15.84C12.376 16.144 12.048 16.568 11.776 17.112C11.504 17.64 11.296 18.272 11.152 19.008C11.024 19.744 10.96 20.536 10.96 21.384C10.96 22.232 11.032 23.024 11.176 23.76C11.32 24.496 11.528 25.136 11.8 25.68C12.072 26.208 12.4 26.632 12.784 26.952C13.184 27.256 13.64 27.408 14.152 27.408C14.664 27.408 15.112 27.248 15.496 26.928C15.896 26.592 16.224 26.152 16.48 25.608C16.752 25.048 16.952 24.408 17.08 23.688C17.208 22.952 17.272 22.184 17.272 21.384ZM38.0868 19.848V26.136C38.0868 26.808 38.1828 27.296 38.3748 27.6C38.5828 27.904 38.8948 28.056 39.3108 28.056C39.4548 28.056 39.5988 28.04 39.7428 28.008C39.9028 27.976 40.0388 27.928 40.1508 27.864L40.1988 29.976C40.0068 30.072 39.7508 30.152 39.4308 30.216C39.1108 30.28 38.7908 30.312 38.4708 30.312C37.4308 30.312 36.6788 30.008 36.2148 29.4C35.7668 28.776 35.5428 27.888 35.5428 26.736V19.848H34.0068V17.76H35.5428V14.64H38.0868V17.76H40.2228V19.848H38.0868ZM46.0991 14.208C46.0991 14.688 45.9471 15.088 45.6431 15.408C45.3391 15.728 44.9631 15.888 44.5151 15.888C44.0511 15.888 43.6671 15.728 43.3631 15.408C43.0751 15.088 42.9311 14.688 42.9311 14.208C42.9311 13.744 43.0751 13.344 43.3631 13.008C43.6671 12.672 44.0511 12.504 44.5151 12.504C44.9791 12.504 45.3551 12.672 45.6431 13.008C45.9471 13.344 46.0991 13.744 46.0991 14.208ZM43.1711 30V17.76H45.8591V30H43.1711ZM55.1402 13.752C54.9322 13.672 54.6922 13.632 54.4202 13.632C54.1162 13.632 53.8682 13.704 53.6762 13.848C53.4842 13.976 53.3322 14.152 53.2202 14.376C53.1082 14.6 53.0282 14.856 52.9802 15.144C52.9322 15.432 52.9082 15.728 52.9082 16.032V17.76H54.8762V19.92H52.9322V30H50.2922V19.92H48.7562V17.76H50.2922V15.984C50.2922 15.344 50.3562 14.744 50.4842 14.184C50.6282 13.608 50.8442 13.112 51.1322 12.696C51.4362 12.28 51.8282 11.952 52.3082 11.712C52.7882 11.472 53.3642 11.352 54.0362 11.352C54.2282 11.352 54.4442 11.368 54.6842 11.4C54.9242 11.432 55.1322 11.48 55.3082 11.544L55.1402 13.752ZM62.2735 31.68C62.1135 32.288 61.9215 32.84 61.6975 33.336C61.4895 33.848 61.2255 34.28 60.9055 34.632C60.5855 35 60.2015 35.28 59.7535 35.472C59.3215 35.664 58.8095 35.76 58.2175 35.76C57.8975 35.76 57.5855 35.736 57.2815 35.688C56.9935 35.656 56.7535 35.608 56.5615 35.544L56.8975 33.096C57.0255 33.144 57.1775 33.184 57.3535 33.216C57.5455 33.264 57.7295 33.288 57.9055 33.288C58.3375 33.288 58.6655 33.152 58.8895 32.88C59.1135 32.624 59.2815 32.264 59.3935 31.8L59.7535 30.288L56.1775 17.76H59.0335L61.1695 26.976H61.2415L63.1855 17.76H65.9455L62.2735 31.68Z" fill="white"/>
    <path d="M14 2.875C8.14844 2.875 3.39062 7.25 2.67969 12.8281C3.22656 12.6641 3.77344 12.5 4.375 12.5C5.79688 12.5 7 13.7031 7 15.125V22.125C7 23.6016 5.79688 24.75 4.375 24.75C1.91406 24.75 0 22.8359 0 20.375V19.5V16.875V14.25C0 6.53906 6.23438 0.25 14 0.25C21.7109 0.25 28 6.53906 28 14.25V16.875V19.5V20.375C28 22.8359 26.0312 24.75 23.625 24.75C22.1484 24.75 21 23.6016 21 22.125V15.125C21 13.7031 22.1484 12.5 23.625 12.5C24.1719 12.5 24.7734 12.6641 25.2656 12.8281C24.5547 7.25 19.7969 2.875 14 2.875Z" fill="#121212"/>
    </svg>
    
    </svg>
  `;

  return (
    <div>
      {/* Render the SVG using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    </div>
  );
}

export default Logo;
