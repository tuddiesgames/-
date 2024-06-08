import ProductPage from "../component/ProductPage";

const AppDevelopment = ()=>{
    return(
        <>
        <ProductPage 
            websites = {app}
            pageTitle = "Our Apps"
        /> 
        </>
    )
}
export default AppDevelopment



const app= [
    {
      name: "Social Media App",
      description: "Connects people and allows them to share content and interact.",
      price: "$5000 - $200000",
      media: {
        type: "image",
        url: "/app/social_media_app.jpeg"
      }
    },
    {
      name: "E-commerce App",
      description: "Facilitates online buying and selling of goods or services.",
      price: "$10000 - $300000",
      media: {
        type: "image",
        url: "/app/e_commerce_app.webp"
      }
    },
    {
      name: "On-Demand Service App",
      description: "Provides on-demand services like food delivery, ride-hailing, etc.",
      price: "$10000 - $250000",
      media: {
        type: "image",
        url: "/app/on_demand_service_app.webp"
      }
    },
    {
      name: "Fitness App",
      description: "Offers fitness tracking, workout routines, and health tips.",
      price: "$5000 - $100000",
      media: {
        type: "image",
        url: "/app/fitness_app.png"
      }
    },
    {
      name: "Educational App",
      description: "Delivers educational content, courses, and learning materials.",
      price: "$5000 - $150000",
      media: {
        type: "image",
        url: "/app/educational_app.webp"
      }
    },
    {
      name: "Finance App",
      description: "Manages personal finances, budgeting, and investments.",
      price: "$10000 - $200000",
      media: {
        type: "image",
        url: "/app/finance_app.png"
      }
    },
    {
      name: "Healthcare App",
      description: "Provides healthcare services, appointment booking, and telemedicine.",
      price: "$10000 - $300000",
      media: {
        type: "image",
        url: "/app/healthcare_app.jpeg"
      }
    },
    {
      name: "Gaming App",
      description: "Engages users with interactive and entertaining games.",
      price: "$20000 - $500000",
      media: {
        type: "image",
        url: "/app/gaming_app.jpeg"
      }
    },
    {
      name: "Travel App",
      description: "Assists users with travel planning, booking, and information.",
      price: "$5000 - $150000",
      media: {
        type: "image",
        url: "/app/travel_app.jpeg"
      }
    },
    {
      name: "Productivity App",
      description: "Helps users with task management, time tracking, and productivity.",
      price: "$5000 - $100000",
      media: {
        type: "image",
        url: "/app/productivity_app.jpg"
      }
    }
  ];
  