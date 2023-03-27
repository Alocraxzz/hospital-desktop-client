
export const TableLoad = () => {
    return (
        <div className="border border-slate-700 shadow rounded-md p-4 pb-auto w-full">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 bg-slate-400 rounded"></div>
                        <div className="h-2 bg-slate-400 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};