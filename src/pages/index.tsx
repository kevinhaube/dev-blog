import * as React from "react"
import PageContainer from "../components/PageContainer/PageContainer";
import FeaturedRotator from "../components/FeaturedRotator/FeaturedRotator";

const BlogIndex = () => {
    const mockFeatured = [
        {title: "Blog title 1", timestamp: "2022-05-02"},
        {title: "Blog title 2", timestamp: "2022-05-12"},
        {title: "Blog title 3", timestamp: "2022-05-22"},
    ]
    return (
        <PageContainer>
            <FeaturedRotator rotation={mockFeatured} />
        </PageContainer>
    )
}

export default BlogIndex
