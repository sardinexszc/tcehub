'use client';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { categories, generations } from '@/lib/mock-data';
export type Filters = {
  search: string;
  category: string;
  generation: string;
  region: string;
};
export function FilterSelect({
  value,
  onChange,
  options,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  label: string;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger aria-label={label}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All {label.toLowerCase()}</SelectItem>
        {options.map((o) => (
          <SelectItem key={o} value={o}>
            {o}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
export function FilterBar({
  filters,
  onChange,
  regions,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
  regions: string[];
}) {
  return (
    <div className="mb-8">
      <div className="grid gap-3 md:grid-cols-[2fr_1fr_1fr]">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-3.5 text-muted"
            size={17}
            aria-hidden="true"
          />
          <Input
            id="search"
            className="pl-10 scroll-mt-28"
            placeholder="Search shops or cities…"
            aria-label="Search shops"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
          />
        </div>
        <FilterSelect
          label="Generations"
          options={generations}
          value={filters.generation}
          onChange={(generation) => onChange({ ...filters, generation })}
        />
        <FilterSelect
          label="Regions"
          options={regions}
          value={filters.region}
          onChange={(region) => onChange({ ...filters, region })}
        />
      </div>
      <div
        role="group"
        aria-label="Service"
        className="mt-4 flex flex-wrap items-center gap-2"
      >
        {['all', ...categories].map((c) => (
          <Button
            key={c}
            size="sm"
            variant={filters.category === c ? 'ink' : 'outline'}
            aria-pressed={filters.category === c}
            onClick={() => onChange({ ...filters, category: c })}
            className="capitalize"
          >
            {c === 'all' ? 'All services' : c}
          </Button>
        ))}
      </div>
    </div>
  );
}
