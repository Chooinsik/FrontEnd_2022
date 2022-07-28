import React from 'react';
import { PostTitleDiv,PostTitle } from './styledComponents';

const WriteTitle = () => {
    return (
        <PostTitleDiv>
            <PostTitle>글쓰기</PostTitle>
        </PostTitleDiv>
    );
};

export default React.memo(WriteTitle);