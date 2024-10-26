"use client";

import { useActionState } from "react";
import { DeleteArticleButton as DeleteArticleButtonPresentation } from "./presentation";
import { deleteArticleAction } from "./action";

type Props = {
  slug: string;
};

export const DeleteArticleButton = ({ slug }: Props) => {
  const [_state, dispatch, isPending] = useActionState(deleteArticleAction, undefined);

  const handleClickDelete = () => {
    if (!confirm("Delete this article?")) {
      return;
    }

    dispatch(slug);
  };

  return <DeleteArticleButtonPresentation handleClickDelete={handleClickDelete} />;
};