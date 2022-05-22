import * as React from "react"
import PageContainer from "../components/PageContainer/PageContainer";
import FeaturedRotator, {ItemConfig} from "../components/FeaturedRotator/FeaturedRotator";
import CollectionList from "../components/CollectionList/CollectionList";

const BlogIndex = () => {
    const mockFeatured: ItemConfig[] = [
        {title: "Adventures of an Engineer", timestamp: "2022-05-02"},
        {title: "Why I love TypeScript", timestamp: "2022-05-12"},
        {title: "Welcome to my blog!", timestamp: "2022-05-22"},
    ]
    return (
        <PageContainer>
            <FeaturedRotator rotation={mockFeatured} />
            <CollectionList />
        </PageContainer>
    )
}

export default BlogIndex
