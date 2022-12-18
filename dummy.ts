zipcode: props.data?.fetchUseditem.useditemAddress?.zipcode 
? props.data?.fetchUseditem.useditemAddress?.zipcode
: "",
address: props.data?.fetchUseditem.useditemAddress?.address 
? props.data?.fetchUseditem.useditemAddress?.address
: "",

const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);