import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';

const addCommentSchema = z.object({
  comment: z.string().nonempty('댓글을 입력해주세요.'),
});

type CommentFormProps = {
  isReply?: boolean;
};

const CommentForm = ({ isReply }: CommentFormProps) => {
  const form = useForm<z.infer<typeof addCommentSchema>>({
    resolver: zodResolver(addCommentSchema),
    defaultValues: {
      comment: '',
    },
  });

  const onSubmit = (data: z.infer<typeof addCommentSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full gap-2"
      >
        <Avatar className={isReply ? 'h-6 w-6' : ''}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-col items-end gap-2 bg-transparent">
          <FormField
            name="comment"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="댓글 추가..."
                    className={'min-h-10 border-stone-700 bg-transparent'}
                    rows={
                      isReply &&
                      !form.formState.isDirty &&
                      !form.formState.isValid
                        ? 1
                        : 3
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <Button variant="ghost" type="button" className="h-8 py-1">
              취소
            </Button>
            <Button
              variant="secondary"
              type="submit"
              className="h-8 py-1"
              disabled={!form.formState.isDirty && !form.formState.isValid}
            >
              댓글
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default CommentForm;
