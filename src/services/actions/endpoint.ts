export default function getEndpointURL(environment: any) {
    switch(environment) {
        case "development":
            return process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL;
        case "production":
            return process.env.NEXT_PUBLIC_PRODUCTION_API_URL;
        default: 
            return process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL;
    };
};