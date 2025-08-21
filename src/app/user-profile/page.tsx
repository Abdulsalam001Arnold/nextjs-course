
import { UserProfile } from "@clerk/nextjs";
export default function page() {
    
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <UserProfile path="/user-profile"/>
        </div>
        ) 
};
