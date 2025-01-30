import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { FileVideo, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Badge } from '../ui/badge';

const addCategorySchema = z.object({
  title: z.string().nonempty('제목을 입력해주세요.'),
  description: z.string().nonempty('설명을 입력해주세요.'),
  multiUpload: z.array(
    z.object({
      preview: z.string(),
      name: z.string(),
      size: z.number(),
      type: z.string(),
    }),
  ),
  tags: z.array(z.string()),
});

const ShortsUploadDialog = () => {
  const form = useForm<z.infer<typeof addCategorySchema>>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      title: '',
      description: '',
      multiUpload: [],
      tags: [],
    },
  });
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (data: z.infer<typeof addCategorySchema>) => {
    console.log('123', data);
  };

  const { setValue, watch } = form;
  const values = watch();

  const addHashtag = () => {
    if (inputValue === '') return;
    setValue('tags', [...values.tags, inputValue], { shouldValidate: true });
    setInputValue(''); // 초기화
  };

  const removeHashtag = (tag: string) => {
    setValue(
      'tags',
      values.tags.filter((t) => t !== tag),
      { shouldValidate: true },
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addHashtag();
    }
  };

  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant={'secondary'}
          className="h-12 w-12 rounded-full [&_svg]:size-5"
        >
          <FileVideo />
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <Form {...form}>
          <form
            id="loginForm"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <DialogHeader>
              <DialogTitle>카테고리 만들기</DialogTitle>
            </DialogHeader>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">제목</FormLabel>
                  <FormControl className="md:text-base">
                    <Input placeholder="제목" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">설명</FormLabel>
                  <FormControl className="md:text-base">
                    <Input placeholder="한 줄 설명..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <h2>태그</h2>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="#해시태그 입력"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-grow"
                />
                <Button
                  type="button"
                  variant={'secondary'}
                  onClick={addHashtag}
                >
                  추가
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {values.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="animate-fade-in px-2 py-1 text-sm"
                  >
                    #{tag}
                    <button
                      onClick={() => removeHashtag(tag)}
                      className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">저장하기</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ShortsUploadDialog;
