import { zodResolver } from '@hookform/resolvers/zod';
import { Flag } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const items = [
  {
    id: '1',
    label: '영리목적/홍보성',
  },
  {
    id: '2',
    label: '개인정보노출',
  },
  {
    id: '3',
    label: '불법정보',
  },
  {
    id: '4',
    label: '음란성/선정성',
  },
  {
    id: '5',
    label: '욕설/인신공격',
  },
  {
    id: '6',
    label: '아이디/DB거래',
  },
  {
    id: '7',
    label: '같은 내용 반복(도배)',
  },
  {
    id: '8',
    label: '기타',
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()),
});

const ReportDialog = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['1', '2'],
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Dialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <Flag />
              신고
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>신고</DialogTitle>
            </DialogHeader>
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">신고</FormLabel>
                    <FormDescription>
                      여러 사유에 해당하는 경우 대표적인 사유 1개를 선택해주세요
                    </FormDescription>
                  </div>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">신고</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
};

export default ReportDialog;
