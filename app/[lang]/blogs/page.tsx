import Profile from "./blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs",
    description: "Blogs | new blog every week",
};

export default function ProfilePage() {
    return <Profile />;
}
